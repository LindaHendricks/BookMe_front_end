class ShootingsController < ApplicationController

    
    def index
        @shootings = Shooting.all
        render json: @shootings
    end

    # def new
    #     @photographers = Photographer.all
    #     @fashiongirls = Fashiongirl.all
    #     @shooting = Shooting.new 
    #     # @errors = flash[:error] 
    # end 

    def create
         new_shooting = Shooting.create(shooting_params)
         render json: new_shooting
        # if new_shooting.valid?
        # redirect_to shootings_path
        # else
        #     flash[:error] = new_shooting.errors.full_messages
        #     redirect_to new_shooting_path
        # end
    end 

    private 

    def shooting_params
        # params.require(:shooting).permit(:fashiongirl_id, :photographer_id, :date, :location)
        params.permit(:fashiongirl_id, :photographer_id, :date, :location)

    end 


end
