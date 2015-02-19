<?php  namespace Delphinium\Core\RequestObjects;

use Delphinium\Core\Enums\CommonEnums\ActionType;
use Delphinium\Core\Enums\CommonEnums\Lms;

class ModulesRequest extends RootsRequest
{
    public $moduleId;
    public $contentId;
    public $includeContentItems;
    public $includeContentDetails;
    
    function getModuleId() {
        return $this->moduleId;
    }

    function getContentId() {
        return $this->contentId;
    }

    function getIncludeContentItems() {
        return $this->includeContentItems;
    }

    function getIncludeContentDetails() {
        return $this->includeContentDetails;
    }

    function setModuleId($moduleId) {
        $this->moduleId = $moduleId;
    }

    function setContentId($contentId) {
        $this->contentId = $contentId;
    }

    function setIncludeContentItems($includeContentItems) {
        $this->includeContentItems = $includeContentItems;
    }

    function setIncludeContentDetails($includeContentDetails) {
        $this->includeContentDetails = $includeContentDetails;
    }

        function __construct($actionType, $lms, $moduleId = null, $contentId = null,  
            $includeContentItems = false, $includeContentDetails = false) 
    {
            if(ActionType::isValidValue($actionType))
            {  
                $this->actionType = $actionType;
            }
            
            if(Lms::isValidValue($lms))
            {
                $this->lms = $lms;   
            }
            
            $this->setContentId($contentId);
            $this->setIncludeContentDetails($includeContentDetails);
            $this->setIncludeContentItems($includeContentItems);
            $this->setModuleId($moduleId);
    }
}