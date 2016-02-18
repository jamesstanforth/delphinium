<?php namespace Delphinium\Blossom\Components;

use Delphinium\Blossom\Models\Competencies as CompetenceModel;
use Cms\Classes\ComponentBase;

use Delphinium\Roots\Roots;
use Delphinium\Roots\Enums\ActionType;
use Delphinium\Roots\Requestobjects\AssignmentsRequest;// for submissions
use Delphinium\Roots\Requestobjects\SubmissionsRequest;// score


class Competencies extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Competencies',
            'description' => 'Shows students completion of core Competencies'
        ];
    }
    
    public function onStart()
    {
        /* COURSE & INSTANCE FAIL IF HERE use onRender
            get course_id I am in (DEV)
            get instance (with course ID)???

            if (no instance with this course ID){
                create instance with courseID
            }
            launch instance with course ID
        */ 
        
    }
    public function onRender()
    {
		$config = CompetenceModel::find($this->property('instance'));//getInstanceOptions
        // Name is just for instances drop down. not used in component display
        $this->page['config'] = json_encode($config);//->Name;

        $this->page['competenciesColor'] = $config->Color;//Main Color for Amount
        $this->page['competenciesAnimate'] = $config->Animate;
        $this->page['competenciesSize'] = $config->Size;
        
        $roots = new Roots();
        $course = $roots->getCourse();
        $this->page['course'] = json_encode($course);
        
    }

    public function onRun()
    {
		try
        {
            $this->addCss("/plugins/delphinium/blossom/assets/css/bootstrap.min.css");
            $this->addCss("/plugins/delphinium/blossom/assets/css/competencies.css");//overide alert css !important
            //echo '<div id="loader" class="container spinner"></div>';//preloader USELESS
            
            $this->addJs("/plugins/delphinium/blossom/assets/javascript/jquery.min.js");// before BS.js
            $this->addJs("/plugins/delphinium/blossom/assets/javascript/bootstrap.min.js");
			$this->addJs("/plugins/delphinium/blossom/assets/javascript/d3.min.js");
            $this->addJs("/plugins/delphinium/blossom/assets/javascript/competencies.js");
			
			/*get Modules, Assignments & Submissions ******************
				data is N/A if DevConfig Instructor  MUST BE for a Student
				add: Instructor can choose a student to view?
			**************************************************/
			$roots = new Roots();
            
			$req = new AssignmentsRequest(ActionType::GET);
			$res = $roots->assignments($req);

			$assignmentIds = array();// for submissionsRequest
			$assignments = array();// for points_possible // REPLACE
			foreach ($res as $assignment) {
				array_push($assignmentIds, $assignment["assignment_id"]);
				array_push($assignments, $assignment);
			}
            // Replace with modules data ???
			$this->page['assignments']=json_encode($assignments);// REPLACE

			$studentIds = null;//['1604486'];//Test Student
			$allStudents = true;
			$allAssignments = true;
			$multipleStudents = false;
			$multipleAssignments = true;
			$includeTags = true;
			$grouped = true;

			$req = new SubmissionsRequest(ActionType::GET, $studentIds, $allStudents, $assignmentIds, $allAssignments, $multipleAssignments, $includeTags, $includeTags, $grouped);

			$submissions = $roots->submissions($req);
			$this->page['submissions']=json_encode($submissions);// score
            
        }
        catch (\GuzzleHttp\Exception\ClientException $e) {
            return;
        }
        catch(Delphinium\Roots\Exceptions\NonLtiException $e)
        {
            if($e->getCode()==584)
            {
                return \Response::make($this->controller->run('nonlti'), 500);
            }
        }
        catch(\Exception $e)
        {
            if($e->getMessage()=='Invalid LMS')
            {
                return \Response::make($this->controller->run('nonlti'), 500);
            }
            return \Response::make($this->controller->run('error'), 500);
        }
    }
	
	public function defineProperties()
    {
        return [
            'instance'	=> [
                'title'             => 'Competencies Configuration',
                'description'       => 'Select an instance',
                'type'              => 'dropdown',
            ]
        ];
    }

    public function getInstanceOptions()
    {
        /*https://octobercms.com/docs/plugin/components#dropdown-properties
		*  The method should have a name in the following format: get*Property*Options()
		*  where Property is the property name
		*/
		
		$instances = CompetenceModel::where("Name","!=","")->get();

        $array_dropdown = ['0'=>'- select Instance - '];//text in dropdown

        foreach ($instances as $instance)
        {
            $array_dropdown[$instance->id] = $instance->Name;
        }
        //echo "getInstanceOptions:".$instances;
        //$this->page['instances'] = $instances;
        return $array_dropdown;
    }
    
}
