private var ray : Ray;
private var rayCastHit : RaycastHit;


var ResumeGui : GUIText;
var PauseGUI : GUIText;
var paused : boolean = false;
function Update ()
{

    if(Input.GetMouseButtonDown(0))
    {
        ray = Camera.main.ScreenPointToRay (Input.mousePosition);
        
        if(Physics.Raycast (ray, rayCastHit))
        {
             if(rayCastHit.transform.name == "Pause button")
	{
		paused = true;
		Time.timeScale = 0;
		PauseGUI.enabled = true;
		ResumeGui.enabled = true;
	}
	

    else if(Input.GetMouseButtonDown(0));
    {
        ray = Camera.main.ScreenPointToRay (Input.mousePosition);
        
        if(Physics.Raycast (ray, rayCastHit))
        {
             if(rayCastHit.transform.name == "Play button")
	{
		paused = false;
		Time.timeScale = 1;
		PauseGUI.enabled = false;
		ResumeGui.enabled = false;
	   }
    
              
              
              

	
		
			
				
}
}
}
}
}