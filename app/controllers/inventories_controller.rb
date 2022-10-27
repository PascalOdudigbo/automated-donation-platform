class InventoriesController < ApplicationController
  before_action :set_inventory, only: [:show, :update, :destroy]

   #GET /inventories/:charity_id
   def charity_inventories
    inventories = Inventory.where(charity_id: params[:charity_id])
    if inventories.length > 0
      render json: inventories, status: :found
    else
      render json: {error: "no inventories found"}
    end
  end

  # GET /inventories
  def index
    @inventories = Inventory.all

    render json: @inventories
  end

  # GET /inventories/1
  def show
    render json: @inventory
  end

  # POST /inventories
  def create
    @inventory = Inventory.new(inventory_params)

    if @inventory.save
      render json: @inventory, status: :created
    else
      render json: @inventory.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /inventories/1
  def update
    if @inventory.update(inventory_params)
      render json: @inventory
    else
      render json: @inventory.errors, status: :unprocessable_entity
    end
  end

  # DELETE /inventories/1
  def destroy
    @inventory.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_inventory
      @inventory = Inventory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def inventory_params
      params.permit(:item, :quantity, :beneficiary_id, :charity_id)
    end
end
