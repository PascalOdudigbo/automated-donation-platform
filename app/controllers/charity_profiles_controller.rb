class CharityProfilesController < ApplicationController
  before_action :set_charity_profile, only: [:show, :update, :destroy]

  # GET /charity_profiles
  def index
    @charity_profiles = CharityProfile.all

    render json: @charity_profiles
  end

  # GET /charity_profiles/1
  def show
    render json: @charity_profile
  end

  # POST /charity_profiles
  def create
    @charity_profile = CharityProfile.new(charity_profile_params)

    if @charity_profile.save
      render json: @charity_profile, status: :created, location: @charity_profile
    else
      render json: @charity_profile.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /charity_profiles/1
  def update
    if @charity_profile.update(charity_profile_params)
      render json: @charity_profile
    else
      render json: @charity_profile.errors, status: :unprocessable_entity
    end
  end

  # DELETE /charity_profiles/1
  def destroy
    @charity_profile.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_charity_profile
      @charity_profile = CharityProfile.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def charity_profile_params
      params.permit(:charities, :about_us)
    end
end
