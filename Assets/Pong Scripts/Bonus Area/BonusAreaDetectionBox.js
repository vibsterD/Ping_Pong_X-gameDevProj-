var mainGameScript : MainGame;
var particles_square : GameObject;

function OnTriggerEnter (collision : Collider)

{

     if(collision.transform.name == "Ball")
     {
     
     Instantiate(particles_square, transform.position, transform.rotation);
          mainGameScript.AddScoreForBonusArea();
          
          audio.Play();
     }
 }
 
 Debug.Log("ball passed through");