class AdministratorsController < ApplicationController
  before_action :set_administrator, only: [:show, :update, :destroy]

   #Login donor
   def login
    user = Administrator.find_by(email: params[:email])
    if user&.authenticate(params[:password])
        session[:administrator_id] = user.id
        render json: user, status: :created
    else
        render json: {error: "Invalid email or password"}, status: :unauthorized
    end
  end

  #Logout adminstrator
  def logout
    session.delete :administrator_id
    head :no_content
  end

  #Verify adminstrator has logged in
  def loggedIn
    user = Adminstrator.find_by(id: session[:administrator_id])
    render json: user, status: :created
  end


  # GET /administrators
  def index
    @administrators = Administrator.all

    render json: @administrators
  end

  # GET /administrators/1
  def show
    render json: @administrator
  end

  # POST /administrators
  def create
    @administrator = Administrator.new(administrator_params)

    if @administrator.save
      render json: @administrator, status: :created, location: @administrator
    else
      render json: @administrator.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /administrators/1
  def update
    if @administrator.update(administrator_params)
      render json: @administrator
    else
      render json: @administrator.errors, status: :unprocessable_entity
    end
  end

  # DELETE /administrators/1
  def destroy
    @administrator.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_administrator
      @administrator = Administrator.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def administrator_params
      params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
end
