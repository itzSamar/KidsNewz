const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", (req, res) =>
{
    res.send(`
    <!DOCTYPE html>
    <html>
      <head> 
        <style>
          body{background-color: silver;}
        </style>
      </head>
      <body>
          <script>
            //Add in calculated from, to, parameters instead of relevancy
            fetch('https://newsapi.org/v2/everything?sortBy=relevancy&q="technology"&pageSize=5&apiKey=189731320c67482cbc3f3eb8cb138836')
            .then(function (response) {
              return response.json();
            })
            .then(function (myJson) {
              document.querySelector("#ipText").innerHTML = myJson.articles[1].url;
              var url ="https://api.smmry.com?SM_URL=" + myJson.articles[1].url + "&SM_LENGTH=6&SM_KEYWORD_COUNT=5&SM_API_KEY=87C3B0F9D1"
              fetch(url)
              .then(function (response) {
                return response.json();
                
              })
              .then(function (myJson){
                console.log(myJson)
    
              } )
                
    
                
              
              
              
            })
            .catch(function (error) {
              console.log("Error: " + error);
            });
            
            
          </script>
        <h1>| KIDZ NEWZ |</h1>
        <!-- Make it look nice -->
        <p>Kidz Newz is the new fun way to get important news quickly, easily, and efficiantly</p>
        <!-- add color here -->
        <a href="#highlight">
            <button> - Visit Highlight section - </button>
         </a>
         <h1>|_ CATOGORIES _|</h1>
        <a href="/sports">
            <button> - sports - </button>
        </a>
        <a href="/health">
            <button> - health - </button>
        </a>
        <a href="/tech">
            <button> - technology - </button>
        </a>
        <a href="/politics">
            <button> - politics - </button>
        </a>
        <a href="/business">
              <button> - business - </button>
        </a>
        <a href="/style">
              <button> - style - </button>
        </a>
    
      </body>
    
    </html>
    
        
          
    `)
});
router.get("/tech", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body{background-color: silver;}
    </style>

  
      <script>
          let articles = [];
          //Add in calculated from, to, parameters instead of relevancy
          fetch('https://newsapi.org/v2/everything?sortBy=relevancy&q="technology"&pageSize=5&apiKey=189731320c67482cbc3f3eb8cb138836')
          .then(function (response) {
            return response.json();
          })
          .then(function (myJson) { 
              for (let i = 0; i < 4; i++) {
              let selector_title = "#P" + i
              let selector = "#article"  + i
              
              let selector_keywords = "#K"  + i
                  console.log(myJson.articles[i].url)
                  var url ="https://api.smmry.com?SM_URL=" + myJson.articles[i].url + "&SM_LENGTH=6&SM_KEYWORD_COUNT=5&SM_API_KEY=87C3B0F9D1"
                  fetch(url)
                  .then(function (response) {
                  
                      return response.json();
                      
                  })
                  .then(function (myJson){
                      articles[i] = myJson
                      let keywords = "Keywords from this article: "
                      document.querySelector(selector).innerHTML = articles[i].sm_api_title
                      //console.log(selector)
                      document.querySelector(selector_title).innerHTML = articles[i].sm_api_content
                      for (let j = 0; j < articles[i].sm_api_keyword_array.length; j++) {
                          keywords += articles[i].sm_api_keyword_array[j] + ", "
                      }
                      keywords = keywords.slice(0, -2)
                      console.log(keywords)
                      document.querySelector(selector_keywords).innerHTML = keywords
                  } )
                      
              } 
              
            
            
            
          })
          .catch(function (error) {
            console.log("Error: " + error);
          });
      </script>
  </head>
  <body>
        
      <h1>TECHNOLOGY</h1>    
  
  
  
      <h2 id = "article1">LOADING...</h2> 
      <p id = "P1"></p>
      <p id = "K1"></p>
  
      <h2 id = "article2"></h2>
      <p id = "P2"></p>
      <p id = "K2"></p>
  
      <h2 id = "article3"></h2>
      <p id = "P3"></p>
      <p id = "K3"></p>
  
      <h2 id = "article4"></h2>
      <p id = "P4"></p>
      <p id = "K4"></p>
  
  
      
      
  
  </body>
  
  
  </html>
  
      
  `
  )
});

router.get("/sports", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <style>
    body{background-color: silver;}
  </style>
      <script>
          let articles = [];
          //Add in calculated from, to, parameters instead of relevancy
          fetch('https://newsapi.org/v2/everything?sortBy=relevancy&q="sports"&pageSize=4&apiKey=189731320c67482cbc3f3eb8cb138836')
          .then(function (response) {
            return response.json();
          })
          .then(function (myJson) { 
              for (let i = 0; i < 4; i++) {
              let selector_title = "#P" + i
              let selector = "#article"  + i
              
              let selector_keywords = "#K"  + i
                  console.log(myJson.articles[i].url)
                  var url ="https://api.smmry.com?SM_URL=" + myJson.articles[i].url + "&SM_LENGTH=6&SM_KEYWORD_COUNT=5&SM_API_KEY=87C3B0F9D1"
                  fetch(url)
                  .then(function (response) {
                  
                      return response.json();
                      
                  })
                  .then(function (myJson){
                      articles[i] = myJson
                      let keywords = "Keywords from this article: "
                      document.querySelector(selector).innerHTML = articles[i].sm_api_title
                      //console.log(selector)
                      document.querySelector(selector_title).innerHTML = articles[i].sm_api_content
                      for (let j = 0; j < articles[i].sm_api_keyword_array.length; j++) {
                          keywords += articles[i].sm_api_keyword_array[j] + ", "
                      }
                      keywords = keywords.slice(0, -2)
                      console.log(keywords)
                      document.querySelector(selector_keywords).innerHTML = keywords
                  } )
                      
              } 
              
            
            
            
          })
          .catch(function (error) {
            console.log("Error: " + error);
          });
      </script>
  </head>
  <body>
        
      <h1>SPORTS</h1>    
  
  
  
      <h2 id = "article1">LOADING...</h2> 
      <p id = "P1"></p>
      <p id = "K1"></p>
  
      <h2 id = "article2"></h2>
      <p id = "P2"></p>
      <p id = "K2"></p>
  
      <h2 id = "article3"></h2>
      <p id = "P3"></p>
      <p id = "K3"></p>
  
      <h2 id = "article4"></h2>
      <p id = "P4"></p>
      <p id = "K4"></p>
  
  
      
      
  
  </body>
  
  
  </html>
  
      
  `
  )
});
router.get("/health", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <style>
    body{background-color: silver;}
  </style>
      <script>
          let articles = [];
          //Add in calculated from, to, parameters instead of relevancy
          fetch('https://newsapi.org/v2/everything?sortBy=relevancy&q="health"&pageSize=5&apiKey=189731320c67482cbc3f3eb8cb138836')
          .then(function (response) {
            return response.json();
          })
          .then(function (myJson) { 
              for (let i = 0; i < 4; i++) {
              let selector_title = "#P" + i
              let selector = "#article"  + i
              
              let selector_keywords = "#K"  + i
                  console.log(myJson.articles[i].url)
                  var url ="https://api.smmry.com?SM_URL=" + myJson.articles[i].url + "&SM_LENGTH=6&SM_KEYWORD_COUNT=5&SM_API_KEY=87C3B0F9D1"
                  fetch(url)
                  .then(function (response) {
                  
                      return response.json();
                      
                  })
                  .then(function (myJson){
                      articles[i] = myJson
                      let keywords = "Keywords from this article: "
                      document.querySelector(selector).innerHTML = articles[i].sm_api_title
                      //console.log(selector)
                      document.querySelector(selector_title).innerHTML = articles[i].sm_api_content
                      for (let j = 0; j < articles[i].sm_api_keyword_array.length; j++) {
                          keywords += articles[i].sm_api_keyword_array[j] + ", "
                      }
                      keywords = keywords.slice(0, -2)
                      console.log(keywords)
                      document.querySelector(selector_keywords).innerHTML = keywords
                  } )
                      
              } 
              
            
            
            
          })
          .catch(function (error) {
            console.log("Error: " + error);
          });
      </script>
  </head>
  <body>
        
      <h1>HEALTH</h1>    
  
  
  
      <h2 id = "article1">LOADING...</h2> 
      <p id = "P1"></p>
      <p id = "K1"></p>
  
      <h2 id = "article2"></h2>
      <p id = "P2"></p>
      <p id = "K2"></p>
  
      <h2 id = "article3"></h2>
      <p id = "P3"></p>
      <p id = "K3"></p>
  
      <h2 id = "article4"></h2>
      <p id = "P4"></p>
      <p id = "K4"></p>
  
  
      
      
  
  </body>
  
  
  </html>
  
      
  `
  )
});
router.get("/politics", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <style>
    body{background-color: silver;}
  </style>
      <script>
          let articles = [];
          //Add in calculated from, to, parameters instead of relevancy
          fetch('https://newsapi.org/v2/everything?sortBy=relevancy&q="politics"&pageSize=5&apiKey=189731320c67482cbc3f3eb8cb138836')
          .then(function (response) {
            return response.json();
          })
          .then(function (myJson) { 
              for (let i = 0; i < 4; i++) {
              let selector_title = "#P" + i
              let selector = "#article"  + i
              
              let selector_keywords = "#K"  + i
                  console.log(myJson.articles[i].url)
                  var url ="https://api.smmry.com?SM_URL=" + myJson.articles[i].url + "&SM_LENGTH=6&SM_KEYWORD_COUNT=5&SM_API_KEY=87C3B0F9D1"
                  fetch(url)
                  .then(function (response) {
                  
                      return response.json();
                      
                  })
                  .then(function (myJson){
                      articles[i] = myJson
                      let keywords = "Keywords from this article: "
                      document.querySelector(selector).innerHTML = articles[i].sm_api_title
                      //console.log(selector)
                      document.querySelector(selector_title).innerHTML = articles[i].sm_api_content
                      for (let j = 0; j < articles[i].sm_api_keyword_array.length; j++) {
                          keywords += articles[i].sm_api_keyword_array[j] + ", "
                      }
                      keywords = keywords.slice(0, -2)
                      console.log(keywords)
                      document.querySelector(selector_keywords).innerHTML = keywords
                  } )
                      
              } 
              
            
            
            
          })
          .catch(function (error) {
            console.log("Error: " + error);
          });
      </script>
  </head>
  <body>
        
      <h1>POLITICS</h1>    
  
  
  
      <h2 id = "article1">LOADING...</h2> 
      <p id = "P1"></p>
      <p id = "K1"></p>
  
      <h2 id = "article2"></h2>
      <p id = "P2"></p>
      <p id = "K2"></p>
  
      <h2 id = "article3"></h2>
      <p id = "P3"></p>
      <p id = "K3"></p>
  
      <h2 id = "article4"></h2>
      <p id = "P4"></p>
      <p id = "K4"></p>
  
  
      
      
  
  </body>
  
  
  </html>
  
      
  `
  )
});

router.get("/style", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <style>
    body{background-color: silver;}
  </style>
  
      <script>
          let articles = [];
          //Add in calculated from, to, parameters instead of relevancy
          fetch('https://newsapi.org/v2/everything?sortBy=relevancy&q="style"&pageSize=5&apiKey=189731320c67482cbc3f3eb8cb138836')
          .then(function (response) {
            return response.json();
          })
          .then(function (myJson) { 
              for (let i = 0; i < 4; i++) {
              let selector_title = "#P" + i
              let selector = "#article"  + i
              
              let selector_keywords = "#K"  + i
                  console.log(myJson.articles[i].url)
                  var url ="https://api.smmry.com?SM_URL=" + myJson.articles[i].url + "&SM_LENGTH=6&SM_KEYWORD_COUNT=5&SM_API_KEY=87C3B0F9D1"
                  fetch(url)
                  .then(function (response) {
                  
                      return response.json();
                      
                  })
                  .then(function (myJson){
                      articles[i] = myJson
                      let keywords = "Keywords from this article: "
                      document.querySelector(selector).innerHTML = articles[i].sm_api_title
                      //console.log(selector)
                      document.querySelector(selector_title).innerHTML = articles[i].sm_api_content
                      for (let j = 0; j < articles[i].sm_api_keyword_array.length; j++) {
                          keywords += articles[i].sm_api_keyword_array[j] + ", "
                      }
                      keywords = keywords.slice(0, -2)
                      console.log(keywords)
                      document.querySelector(selector_keywords).innerHTML = keywords
                  } )
                      
              } 
              
            
            
            
          })
          .catch(function (error) {
            console.log("Error: " + error);
          });
      </script>
  </head>
  <body>
        
      <h1>STYLE</h1>    
  
  
  
      <h2 id = "article1">LOADING...</h2> 
      <p id = "P1"></p>
      <p id = "K1"></p>
  
      <h2 id = "article2"></h2>
      <p id = "P2"></p>
      <p id = "K2"></p>
  
      <h2 id = "article3"></h2>
      <p id = "P3"></p>
      <p id = "K3"></p>
  
      <h2 id = "article4"></h2>
      <p id = "P4"></p>
      <p id = "K4"></p>
  
  
      
      
  
  </body>
  
  
  </html>
  
      
  `
  )
});
router.get("/business", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
  <style>
    body{background-color: silver;}
  </style>
  
      <script>
          let articles = [];
          //Add in calculated from, to, parameters instead of relevancy
          fetch('https://newsapi.org/v2/everything?sortBy=relevancy&q="business"&pageSize=5&apiKey=189731320c67482cbc3f3eb8cb138836')
          .then(function (response) {
            return response.json();
          })
          .then(function (myJson) { 
              for (let i = 0; i < 4; i++) {
              let selector_title = "#P" + i
              let selector = "#article"  + i
              
              let selector_keywords = "#K"  + i
                  console.log(myJson.articles[i].url)
                  var url ="https://api.smmry.com?SM_URL=" + myJson.articles[i].url + "&SM_LENGTH=6&SM_KEYWORD_COUNT=5&SM_API_KEY=87C3B0F9D1"
                  fetch(url)
                  .then(function (response) {
                  
                      return response.json();
                      
                  })
                  .then(function (myJson){
                      articles[i] = myJson
                      let keywords = "Keywords from this article: "
                      document.querySelector(selector).innerHTML = articles[i].sm_api_title
                      //console.log(selector)
                      document.querySelector(selector_title).innerHTML = articles[i].sm_api_content
                      for (let j = 0; j < articles[i].sm_api_keyword_array.length; j++) {
                          keywords += articles[i].sm_api_keyword_array[j] + ", "
                      }
                      keywords = keywords.slice(0, -2)
                      console.log(keywords)
                      document.querySelector(selector_keywords).innerHTML = keywords
                  } )
                      
              } 
              
            
            
            
          })
          .catch(function (error) {
            console.log("Error: " + error);
          });
      </script>
  </head>
  <body>
        
      <h1>BUISNESS</h1>    
  
  
  
      <h2 id = "article1">LOADING...</h2> 
      <p id = "P1"></p>
      <p id = "K1"></p>
  
      <h2 id = "article2"></h2>
      <p id = "P2"></p>
      <p id = "K2"></p>
  
      <h2 id = "article3"></h2>
      <p id = "P3"></p>
      <p id = "K3"></p>
  
      <h2 id = "article4"></h2>
      <p id = "P4"></p>
      <p id = "K4"></p>
  
  
      
      
  
  </body>
  
  
  </html>
  
      
  `
  )
});


app.use("/", router)
app.listen(3000)
console.log("KIDZ NEWS WORKING")