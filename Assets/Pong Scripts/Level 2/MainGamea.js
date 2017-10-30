var score3DText : TextMesh;
private var score : int = 0;

function Awake ()
{
     InvokeRepeating("UpdateScore" , 0.05, 0.05);
}


function UpdateScore()
{
     score += 1;
     score3DText.text = "Score : " + score.ToString();
}

//this is called from BonuAreaDetectionBox.js inside OnTriggerEnter()
function AddScoreForBonusArea ()
{
 score += 50;
}



function GameOver()
{
     if(score > PlayerPrefs.GetInt("High Score" ))
     {
          PlayerPrefs.SetInt("High Score" , score);
     }
     
     Application.LoadLevel("Game_Over");
}

     
 
  
   
     