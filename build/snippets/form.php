<div class="form-messages"></div>

<form action="mailer.php" method="post" id="form" class="form">

	<div class="form-row">
		<input type="text" id="first-name" name="first-name" required placeholder="First Name*">
		<input type="text" id="last-name" name="last-name" placeholder="Last Name">
	</div>

	<div class="form-row">
		<input type="text" id="venue-name" name="venue-name" placeholder="Venue Name">
		<input type="text" id="venue-city" name="venue-city" required placeholder="Venue City*">
	</div>

	<div class="form-row">
		<input type="text" id="venue-type" name="venue-type" placeholder="Venue Type">
		<input type="tel" id="phone" name="phone-number" required placeholder="Phone Number*">
	</div>

	<div class="form-row">
		<input type="email" id="email" name="email" required placeholder="Email*">
	</div>

	<div class="form-row">
		<input type="text" id="subject" name="subject" placeholder="Subject">
	</div>

	<div class="form-row">
		<textarea name="message" id="message" placeholder="Message"></textarea>
	</div>

	<button type="submit" class="submit">Send Message</button>

</form>
