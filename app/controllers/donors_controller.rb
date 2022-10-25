class DonorsController < ApplicationController
  before_action :set_donor, only: [:show, :update, :destroy]

  #Login donor
  def login
    user = Donor.find_by(email: params[:email])
    if user&.authenticate(params[:password])
        session[:donor_id] = user.id
        render json: user, status: :created
    else
        render json: {error: "Invalid email or password"}, status: :unauthorized
    end
  end

  #Logout donor
  def logout
    session.delete :donor_id
    head :no_content
  end

  #Verify donor has logged in
  def loggedIn
    user = Donor.find_by(id: session[:donor_id])
    if user
      render json: user, status: :found
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  # GET /donors
  def index
    @donors = Donor.all

    render json: @donors
  end

  # GET /donors/1
  def show
    render json: @donor
  end

  # POST /donors
  def create
    @donor = Donor.new(donor_params)

    if @donor.save
      session[:donor_id] = @donor.id
      render json: @donor, status: :created, location: @donor
    else
      render json: @donor.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /donors/1
  def update
    if @donor.update(donor_params)
      render json: @donor
    else
      render json: @donor.errors, status: :unprocessable_entity
    end
  end

  # DELETE /donors/1
  def destroy
    @donor.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_donor
      @donor = Donor.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def donor_params
      params.permit(:first_name, :last_name, :email,:country,:password, :password_confirmation )
    end
end
