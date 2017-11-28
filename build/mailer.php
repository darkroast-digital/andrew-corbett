<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $firstname = strip_tags(trim($_POST["first-name"]));
				$firstname = str_replace(array("\r","\n"),array(" "," "),$firstname);
        $lastname = strip_tags(trim($_POST["last-name"]));
                $lastname = str_replace(array("\r","\n"),array(" "," "),$lastname);
        $venuename = strip_tags(trim($_POST["venue-name"]));
                $venuename = str_replace(array("\r","\n"),array(" "," "),$venuename);
        $venuecity = strip_tags(trim($_POST["venue-city"]));
                $venuecity = str_replace(array("\r","\n"),array(" "," "),$venuecity);
        $venuetype = strip_tags(trim($_POST["venue-type"]));
                $venuetype = str_replace(array("\r","\n"),array(" "," "),$venuetype);
		$phone = strip_tags(trim($_POST["phone-number"]));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $subject = strip_tags(trim($_POST["subject"]));
                $subject = str_replace(array("\r","\n"),array(" "," "),$subject);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($firstname) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "info@acorbettconsulting.com";

        // Set the email subject.
        $subject = "New contact from $firstname";

        // Build the email content.
        $email_content = "Name: $firstname . $lastname\n";
        $email_content .= "Phone: $phone\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Venue Name: $venuename\n";
        $email_content .= "Venue City: $venuecity\n";
        $email_content .= "Venue Type: $venuetype\n\n";
        $email_content .= "Subject: $subject\n\n";
        $email_content .= "Message:\n$message\n";

        // Send the email.
        if (mail($recipient, $subject, $email_content)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
