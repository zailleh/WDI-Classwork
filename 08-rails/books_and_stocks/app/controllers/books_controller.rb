class BooksController < ApplicationController
  def home
    render :home
  end

  def search

    if !params[:book].nil? && !params[:book].empty?
      book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{params[:book]}"

      book_info = HTTParty.get book_url
      @total_items = book_info['totalItems']

      if @total_items > 0
        first_match = book_info['items'].first['volumeInfo']
        @thumbnail_url = first_match['imageLinks']['thumbnail']
        @title = first_match['title']
        @author = first_match['authors'].join ', '
        @description = first_match['description']
      end
    end

    render :result
  end
end