export default function Whereis() {
   return (
        <form action="/" method="post">
            <div class="whereis_main">
                <h1>Submit Your Location</h1>
                
                <div class="box">
                    <h6>Email</h6><input placeholder="Enter your email" type="text" />
                </div>
                
                <div class="box">
                    <h6>Date</h6><input placeholder="YYYY/MM/DD" type="text" />
                </div>

                <div class="box">
                    <h6>Time</h6><input placeholder="00:00" type="text" />
                </div>

                <div class="box">
                    <h6>Location</h6><input placeholder="Enter your location" type="text" />
                </div>
                
                <button class="button_primary" type="submit">Submit</button>
                
                <div class="view_signup">
                    <button class="button_primary">View Colleauges</button> 
                </div>
            </div>
            
        </form>
   ) 
}