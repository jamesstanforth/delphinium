<?php namespace Delphinium\Blossom\Models;

use Delphinium\Xylum\Models\CustomModel;
/**
 * experience Model
 */
class Experience extends CustomModel
{
    
    use \October\Rain\Database\Traits\Validation;
    /**
     * @var string The database table used by the model.
     */
    public $table = 'delphinium_blossom_experiences';

    public $rules = [
//        'id'=>'required',
        'name'=>'required',
        'total_points'=>'required',
//        'num_milestones' => 'required',
        'start_date' => 'required',
        'end_date' => 'required',
        'bonus_per_day' => 'required',
        'penalty_per_day' => 'required',
        'bonus_days' => 'required',
        'penalty_days' => 'required',
//        'animate'=>'required',
//        'size' => 'required'
    ];

     public $hasMany = [
        'milestone' => ['\Delphinium\Blossom\Models\Milestone',
        'table' => 'delphinium_blossom_milestones',
        'foreignKey' => 'id',
        'delete'=>'true']
    ];
     
    public function save(array $data = null, $sessionKey = null)
    {
        if(is_null($data))
        {
            $data = array();
        }
        $data['type'] = "Experience";
        
        return parent::save($data);
    }
}