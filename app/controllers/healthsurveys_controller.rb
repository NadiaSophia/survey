class HealthsurveysController < ApplicationController
  before_action :set_healthsurvey, only: [:show, :edit, :update, :destroy]

  # GET /healthsurveys
  # GET /healthsurveys.json
  def index
    @healthsurveys = Healthsurvey.all
  end

  # GET /healthsurveys/1
  # GET /healthsurveys/1.json
  def show
  end

  # GET /healthsurveys/new
  def new
    @healthsurvey = Healthsurvey.new
  end

  # GET /healthsurveys/1/edit
  def edit
  end

  # POST /healthsurveys
  # POST /healthsurveys.json
  def create
    @healthsurvey = Healthsurvey.new(healthsurvey_params)

    respond_to do |format|
      if @healthsurvey.save
        format.html { redirect_to @healthsurvey, notice: 'Healthsurvey was successfully created.' }
        format.json { render :show, status: :created, location: @healthsurvey }
      else
        format.html { render :new }
        format.json { render json: @healthsurvey.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /healthsurveys/1
  # PATCH/PUT /healthsurveys/1.json
  def update
    respond_to do |format|
      if @healthsurvey.update(healthsurvey_params)
        format.html { redirect_to @healthsurvey, notice: 'Healthsurvey was successfully updated.' }
        format.json { render :show, status: :ok, location: @healthsurvey }
      else
        format.html { render :edit }
        format.json { render json: @healthsurvey.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /healthsurveys/1
  # DELETE /healthsurveys/1.json
  def destroy
    @healthsurvey.destroy
    respond_to do |format|
      format.html { redirect_to healthsurveys_url, notice: 'Healthsurvey was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_healthsurvey
      @healthsurvey = Healthsurvey.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def healthsurvey_params
      params.require(:healthsurvey).permit(:id, :name, :email, :patient1 ,:insuranceProvider1 ,:hospitalAdministrator1 ,:clincian1 ,:physician1 ,:policymaker1 ,:communityMember1, :other1, :other1Response, :competition2 ,:lackOfEducation2 ,:incongruentSystems2 ,:poorCommunication2 ,:diagnosticErrors2 ,:inefficientTracking2 ,:privacy2 ,:valuebasedPaymentSystems2, :disconnectBetweenSystems2, :other2, :other2Response, :q3_1, :q3_2, :q3_4,  :incraesesCosts4_1, :decreasesAvailability4_1, :decreasesQuality4_1, :decreasesUse4_1, :decreasesCollaboration4_1, :decreasesTrust4_1, :decreasesEfficiency4_1, :incraesesCosts4_2, :decreasesAvailability4_2, :decreasesQuality4_2, :decreasesUse4_2, :decreasesCollaboration4_2, :decreasesTrust4_2, :decreasesEfficiency4_2, :incraesesCosts4_3, :decreasesAvailability4_3, :decreasesQuality4_3, :decreasesUse4_3, :decreasesCollaboration4_3, :decreasesTrust4_3, :decreasesEfficiency4_3, :comparativeTools5, :eduationTraining5, :standardizingTracking5, :digitalAccess5, :diagnosticErrors5, :wearableTech5, :blockchain5, :valuebasedPayment5, :collaboration5, :q6_1, :q6_2, :q6_3, :q7_1, :q7_2, :q7_3, :q8_1, :q8_2, :q9_1, :q9_2, :connect10, :ideas10, :technologies10, :implement10, :improve10, :talent10, :funding10, :vision10, :collaboration10, :contact, :created_at, :updated_at)
    end
end
