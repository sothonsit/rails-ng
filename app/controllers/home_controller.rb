class HomeController < ApplicationController
  def index
    @hero = {
        'id': '1',
        'name': 'One'
      }
  end
end
