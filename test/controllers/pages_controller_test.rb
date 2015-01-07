require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get roompage" do
    get :roompage
    assert_response :success
  end

end
