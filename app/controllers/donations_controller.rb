class DonationsController < ApplicationController
  before_action :set_donation, only: [:show, :update, :destroy]

  #GET /a_charitys_donations/:charity_id
  def charity_donations
    donations = Donation.where(charity_id: params[:charity_id])
    if donations.length > 0
      render json: donations, status: :found
    else
      render json: {error: "no donations found"}
    end
  end


#GET /a_donors_donations / :donor_id
  def donor_donations
    donations = Donation.where(donor_id: params[:donor_id])
    if donations.length > 0
      render json: donations, status: :found
    else
      render json: {error: "no donations found"}
    end
  end

  # GET /donations
  def index
    @donations = Donation.all

    render json: @donations
  end

  # GET /donations/1
  def show
    render json: @donation
  end

  # POST /donations
  def create
    @donation = Donation.new(donation_params.except(:donation))

    if @donation.save
      render json: @donation, status: :created, location: @donation
    else
      render json: @donation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /donations/1
  def update
    if @donation.update(donation_params)
      render json: @donation
    else
      render json: @donation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /donations/1
  def destroy
    @donation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_donation
      @donation = Donation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def donation_params
      params.permit(:donor_id, :charity_id, :donation_frequency, :amount, :anonymous, :donation)
    end
end
