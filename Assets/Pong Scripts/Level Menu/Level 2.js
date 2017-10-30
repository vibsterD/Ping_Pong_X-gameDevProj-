//dcelare the raycast objects here so we dont need to instantiate them each frame
private var ray : Ray;
private var rayCastHit : RaycastHit;



function Update ()
{

    if(Input.GetMouseButtonDown(0))
    {
        ray = Camera.main.ScreenPointToRay (Input.mousePosition);
        
        if(Physics.Raycast (ray, rayCastHit))
        {
             if(rayCastHit.transform.name == "Level 2")
             {
                    Application.LoadLevel("Level 2");
              }
              
         }
         
    }
}