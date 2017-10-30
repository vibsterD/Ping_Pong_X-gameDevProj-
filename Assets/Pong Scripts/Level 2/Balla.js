var mainGameaScript : MainGamea;
var particles_splash : GameObject;



function Awake()
{
    rigidbody.AddForce(4, 4, 0, ForceMode.Impulse);
    InvokeRepeating("IncreaseBallVelocity", 2, 2);
    
    
    }
    
    
    function Update ()

{
     if( transform.position.y < -3.5)
     {
     mainGameaScript.GameOver();
     }
}

function IncreaseBallVelocity ()
{
if(rigidbody.velocity.x < 14 && rigidbody.velocity.y < 14 && rigidbody.velocity.x > -14 && rigidbody.velocity.y > -14);

{
      rigidbody.velocity *= 1.05;
      Debug.Log("velocity: " + rigidbody.velocity);
      
}
}    
    
function OnCollisionEnter(collision : Collision)
{
    Instantiate(particles_splash , transform.position , transform.rotation);
    audio.Play(); 
}