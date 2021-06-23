class FashiongirlsController < ApplicationController
    def index
        @fashiongirls = Fashiongirl.all
        render json: @fashiongirls
    end 
    def create
        new_fashiongirl = Fashiongirl.create(fashiongirl_params)
        render json: new_fashiongirl
        # if new_fashiongirl.valid?
        # redirect_to fashiongirls_path
        # else
        #     flash[:errors] = new_fashiongirl.errors.full_messages
        #     redirect_to new_fashiongirl_path
        # end
    end 

    def show
        @fashiongirl = Fashiongirl.find(params[:id])
        #@photographers = @fashiongirl.photographers 
        # render json: @fashiongirl
    end 
    
    def update 
    updated_fashiongirl = Fashiongirl.find(params[:id])
    updated_fashiongirl.update(fashiongirl_params)
    render json: updated_fashiongirl
    end 

    def delete
            @fashiongirl = Fashiongirl.find(params[:id])
            @fashiongirl.delete
            render json: @fashiongirl
        
    end


    private 

    def fashiongirl_params
        params.require(:fashiongirl).permit(:name, :age, :location, :portfolio)
        #params.permit(:name, :age, :location, )
    end 

end
