class StoriesController < ApplicationController
  before_action :set_story, only: [:show, :update, :destroy]

  def charity_stories
    stories = Story.where(charity_id: params[:charity_id])
    if stories.length > 0
      render json: stories, status: :found
    else
      render json: {error: "no stories found"}
    end
  end 

  # GET /stories
  def index
    @stories = Story.all

    render json: @stories
  end

  # GET /stories/1
  def show
    render json: @story
  end

  # POST /stories
  def create
    @story = Story.new(story_params)

    if @story.save
      render json: @story, status: :created
    else
      render json: @story.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stories/1
  def update
    if @story.update(story_params)
      render json: @story
    else
      render json: @story.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stories/1
  def destroy
    @story.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_story
      @story = Story.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def story_params
      params.permit(:title, :beneficiary_story, :charity_id, :beneficiary_id, :inventory_id)
    end
end
