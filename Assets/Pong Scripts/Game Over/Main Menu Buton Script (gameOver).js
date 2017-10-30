


private var ray : Ray;

private var rayCastHit : RaycastHit;



function Update ()



{

    if(Input.GetMouseButtonDown(0))
    {
        ray = Camera.main.ScreenPointToRay (Input.mousePosition);
        
        if(Physics.Raycast (ray, rayCastHit))
        {
             if(rayCastHit.transform.name == "MainMenu")
             {
                    Application.LoadLevel("Menu");
              }
              
         }
         
    }
}