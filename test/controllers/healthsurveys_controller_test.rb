require 'test_helper'

class HealthsurveysControllerTest < ActionController::TestCase
  setup do
    @healthsurvey = healthsurveys(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:healthsurveys)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create healthsurvey" do
    assert_difference('Healthsurvey.count') do
      post :create, healthsurvey: { contact: @healthsurvey.contact, email: @healthsurvey.email, name: @healthsurvey.name, q10: @healthsurvey.q10, q1: @healthsurvey.q1, q2: @healthsurvey.q2, q3_1: @healthsurvey.q3_1, q3_2: @healthsurvey.q3_2, q3_4: @healthsurvey.q3_4, q4_1: @healthsurvey.q4_1, q4_2: @healthsurvey.q4_2, q4_3: @healthsurvey.q4_3, q5: @healthsurvey.q5, q6_1: @healthsurvey.q6_1, q6_2: @healthsurvey.q6_2, q6_3: @healthsurvey.q6_3, q7_1: @healthsurvey.q7_1, q7_2: @healthsurvey.q7_2, q7_3: @healthsurvey.q7_3, q8: @healthsurvey.q8, q9: @healthsurvey.q9 }
    end

    assert_redirected_to healthsurvey_path(assigns(:healthsurvey))
  end

  test "should show healthsurvey" do
    get :show, id: @healthsurvey
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @healthsurvey
    assert_response :success
  end

  test "should update healthsurvey" do
    patch :update, id: @healthsurvey, healthsurvey: { contact: @healthsurvey.contact, email: @healthsurvey.email, name: @healthsurvey.name, q10: @healthsurvey.q10, q1: @healthsurvey.q1, q2: @healthsurvey.q2, q3_1: @healthsurvey.q3_1, q3_2: @healthsurvey.q3_2, q3_4: @healthsurvey.q3_4, q4_1: @healthsurvey.q4_1, q4_2: @healthsurvey.q4_2, q4_3: @healthsurvey.q4_3, q5: @healthsurvey.q5, q6_1: @healthsurvey.q6_1, q6_2: @healthsurvey.q6_2, q6_3: @healthsurvey.q6_3, q7_1: @healthsurvey.q7_1, q7_2: @healthsurvey.q7_2, q7_3: @healthsurvey.q7_3, q8: @healthsurvey.q8, q9: @healthsurvey.q9 }
    assert_redirected_to healthsurvey_path(assigns(:healthsurvey))
  end

  test "should destroy healthsurvey" do
    assert_difference('Healthsurvey.count', -1) do
      delete :destroy, id: @healthsurvey
    end

    assert_redirected_to healthsurveys_path
  end
end
