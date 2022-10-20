class CharitiesController < ApplicationController
  before_action :set_charity, only: [:show, :update, :destroy]

  #Login donor
  def login
    user = Charity.find_by(email: params[:email])
    if user&.authenticate(params[:password])
        session[:charity_id] = user.id
        render json: user, status: :created
    else
        render json: {error: "Invalid email or password"}, status: :unauthorized
    end
  end

  #Logout charity
  def logout
    session.delete :charity_id
    head :no_content
  end

  #Verify charity has logged in
  def loggedIn
    user = Charity.find_by(id: session[:charity_id])
    render json: user, status: :created
  end


  # GET /charities
  def index
    @charities = Charity.all

    render json: @charities
  end

  # GET /charities/1
  def show
    render json: @charity
  end

  # POST /charities
  def create
    @charity = Charity.new(charity_params)

    if @charity.save
      render json: @charity, status: :created, location: @charity
    else
      render json: @charity.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /charities/1
  def update
    if @charity.update(charity_params)
      render json: @charity
    else
      render json: @charity.errors, status: :unprocessable_entity
    end
  end

  # DELETE /charities/1
  def destroy
    @charity.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_charity
      @charity = Charity.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def charity_params
      params.permit(:name, :address, :email, :approved)
    end
end
