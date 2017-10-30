//dcelare the raycast objects here so we dont need to instantiate them each frame
private var ray : Ray;
private var rayCastHit : RaycastHit;

var highScore3Dtext : TextMesh;

function Awake()
{
      highScore3Dtext.text = "High Score: " + PlayerPrefs.GetInt("High Score"). ToString(); 
}


function Update ()
{

    if(Input.GetMouseButtonDown(0))
    {
        ray = Camera.main.ScreenPointToRay (Input.mousePosition);
        
        if(Physics.Raycast (ray, rayCastHit))
        {
             if(rayCastHit.transform.name == "Level 1")
             {
                    Application.LoadLevel("Level 1");
              }
              
         }
         
    }
}