import MapCard from './MapCard';


export default function Contact() {
  return(
    <>
    <div id='contact-container'>
    <div id='contact-data-container'>
    <div id='contact-info'>

      <h1>Contact Details</h1>
      <p>Address: Alexandria, 32 Washington str, 22303 </p>
      <p>Phone: (713)800-0000</p>
      <p>Email: info@demolink.org</p>
      <p>We are open: Mon-Fri 11:00-22:00 Sat-Sun 13:00-00:00</p>

    </div>
    <div>
      <MapCard />
    </div>
   </div> 
   </div>
    </>
  );
}