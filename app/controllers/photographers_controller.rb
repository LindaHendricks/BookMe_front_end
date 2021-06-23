class PhotographersController < ApplicationController

    def index
        @photographers = Photographer.all
        render json: @photographers
    end 




end
