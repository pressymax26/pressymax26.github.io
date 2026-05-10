
import Topbar from "../components/topBar.tsx"


const About = () => {
    return(
        <div style={{backgroundImage: `url(/background.png)`, minHeight: '100vh', color: 'white', padding: '20px'}}>
            <header className="topBar">
            <Topbar/>
            </header>
            <div style={{backgroundColor:'black', padding:'20px', borderRadius:'5px', marginTop:'100px'}}>
                <p>Hello! We are the Editorial Team for YMAX 2026, consisting of Olivia, Lin Yi, Charlotte, Leslie and Tian Huai.</p>
                <p>Led by our director Cheng Jie, we hope that YMAX Press this year will be able to engage every delegate's critical thinking skills, and ubnderstand the increasing relevance of the press corps in the world.</p>
            </div>
        
        </div>
    )
}

export default About;
