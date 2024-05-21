import express from'express';
const app = express();
const PORT = 8000; 



app.get('/lostplacesjson', async (req, res) => {
  try {
    const contentfulData = await fetch(process.env.API_KEY);
    const data = await contentfulData.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

app.get('/data',(req,res)=> res.send('hallo ali'))

app.post('/neuekarte',(req,res)=>{

    const neuekarte={
        
    }
})
// Start the server
app.listen(PORT, () => 
 { console.log(`Server is running on http://localhost:${PORT}`);}
);




   