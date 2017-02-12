require 'byebug'
class BooksController < ApplicationController

  def index
    @books = Book.all
  end

  def new
    # your code here

  end

  def create
    # your code here
    # debugger
    # Book.create(title: params[:book][:title], author: params[:book][:author])

    Book.create(book_params)

    redirect_to :action => "index"
  end

  def destroy
    # your code here
    Book.delete(params[:id])
    redirect_to :action => "index"
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
