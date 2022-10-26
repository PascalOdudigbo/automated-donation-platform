class CharityBeneficiariesController < ApplicationController
  before_action :set_charity_beneficiary, only: [:show, :update, :destroy]

  #GET /beneficiaries/:charity_id
  def charity_beneficiaries
    beneficiaries = CharityBeneficiary.where(charity_id: params[:charity_id])
    if beneficiaries.length > 0
      render json: beneficiaries, status: :found
    else
      render json: {error: "no beneficiaries found"}
    end
  end
  
  
  # GET /charity_beneficiaries
  def index
    @charity_beneficiaries = CharityBeneficiary.all

    render json: @charity_beneficiaries
  end

  # GET /charity_beneficiaries/1
  def show
    render json: @charity_beneficiary
  end

  # POST /charity_beneficiaries
  def create
    @charity_beneficiary = CharityBeneficiary.new(charity_beneficiary_params)

    if @charity_beneficiary.save
      render json: @charity_beneficiary, status: :created, location: @charity_beneficiary
    else
      render json: @charity_beneficiary.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /charity_beneficiaries/1
  def update
    if @charity_beneficiary.update(charity_beneficiary_params)
      render json: @charity_beneficiary
    else
      render json: @charity_beneficiary.errors, status: :unprocessable_entity
    end
  end

  # DELETE /charity_beneficiaries/1
  def destroy
    @charity_beneficiary.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_charity_beneficiary
      @charity_beneficiary = CharityBeneficiary.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def charity_beneficiary_params
      params.permit(:charity_id, :beneficiary_id)
    end
end
