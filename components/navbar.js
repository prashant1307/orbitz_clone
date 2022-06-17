function navbar(){
    return ` <nav class="navbar navbar-expand-lg navbar-custom py-3">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <img src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2" alt="" width="169" height="32">
      </a>
      </div>
        <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle navbar-text" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More travel
              </a>
            
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a href="" class="dropdown-item">Stays</a>
                <a href="" class="dropdown-item">Flights</a>
                <a href="" class="dropdown-item">Packages</a>
                <a href="" class="dropdown-item">Cars</a>
                <a href="" class="dropdown-item">Cruises</a>
                <a href="" class="dropdown-item">Things to do</a>
                <a href="" class="dropdown-item">Deals</a>
                <a href="" class="dropdown-item">Groups & meetings</a>
                <a href="" class="dropdown-item">Travel Blog</a>
            </div>
        </div>
   
      
    
    <div class="container justify-content-end">
        <ul class="navbar-nav">
            <li class="nav-item"><a href="" class="nav-link navbar-text">Espanol</a></li>
            <li class="nav-item"><a href="" class="nav-link navbar-text">List your property</a></li>
            <li class="nav-item"><a href="" class="nav-link navbar-text">Support</a></li>
            <li class="nav-item"><a href="" class="nav-link navbar-text">Trips</a></li>
            <li class="nav-item"><a href="signin.html" class="nav-link navbar-text">Sign In</a></li>
            <li class="nav-item"><a href="signup.html" class="nav-link navbar-text">Sign Up</a></li>
            
          </ul>
    </div>
    `
}
function footer(){
  return ` <div>
  <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="">
</div>
<div>
  <h3>Company</h3>
  <p>About</p>
  <p>Jobs</p>
  <p>List your property</p>
  <p>Partnerships</p>
  <p>Newsroom</p>
  <p>Investor Relations</p>
  <p>Site Map</p>
  <p>Orbitz Rewards</p>
  <p>Advertising</p>
</div>
<div>
  <h3>Explore</h3>
  <p>Hotels in United States</p>
  <p>Vacation Rentals in United States</p>
  <p>Car Rentals in United States</p>
  <p>Domestic Flights</p>
  <p>Vacation Packages in United States</p>
  <p>Orbitz Reviews</p>
  <p>Orbitz Coupons</p>
  <p>LGBTQ Travel</p>
  <p>Unique Accommodations</p>
  <p>Travel Blog</p>
</div>
<div>
  <h3>Policies</h3>
  <p>Privacy Policy</p>
  <p>Terms of Use</p>
  <p>Vrbo terms and conditions</p>
  <p>Orbitz Rewards Terms</p>
  <p>Do not sell my personal information</p>
</div>
<div>
  <h3>Help</h3>
  <p>Support</p>
  <p>Cancel your hotel or vacation rental booking</p>
  <p>Cancel your flight</p>
  <p>Refund timelines, policies & processes</p>
  <p>Use an Orbitz Coupon</p>
</div>`
}

export {navbar,footer}