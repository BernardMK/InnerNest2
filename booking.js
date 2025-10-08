function isValidEmail(email) {
            // A commonly used regex for email validation.
            // It checks for: [non-whitespace/non-@] + @ + [non-whitespace/non-@] + . + [non-whitespace/non-@ of at least 2 chars]
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            
            // The test() method executes a search for a match between a regular expression 
            // and a specified string. Returns true or false.
            return emailRegex.test(email);
        }
        function isValidPhoneNumber(phone) {
            // Remove spaces, dashes, and parentheses for validation
            const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
            
            // Check if it contains only digits (and optional + at start)
            // And has 10-15 digits (adjust based on your needs)
            const phoneRegex = /^[\+]?[0-9]{10,15}$/;
            
            return phoneRegex.test(cleaned);
        }


        function validateForm() {

            let error = false; 

            let name = document.forms["myForm"]["name"].value;
            if (name  != "") {
                localStorage.setItem("name", name);
            }
            let phone = document.forms["myForm"]["phone"].value
            if (phone == "" || !isValidPhoneNumber(phone)) {
                const myErrorDiv = document.getElementById("phone");
                const newText = "Please enter a valid phone number";
                myErrorDiv.style.color = "red";
                myErrorDiv.style.fontWeight = "bold";
                myErrorDiv.innerHTML = newText;
                
                error = true;
            } else {
                // Store in a variable instead of localStorage
                validPhoneNumber = phone;
            }

            let email = document.forms["myForm"]["email"].value;
            if (email  == "" || !isValidEmail(email)) {

                const myErrorDiv = document.getElementById("email_label");
                const newText = "Please enter a valid email address";
                myErrorDiv.style.color = "red";
                myErrorDiv.style.fontWeight = "bold";
                myErrorDiv.innerHTML = newText;
                
                document.getElementById("email_label").style.font = "red";
                error = true; 
                //return false;
            }else{
                localStorage.setItem("email", email);
            }

            let date = document.forms["myForm"]["date"].value;
            if (date  == "") {
                localStorage.setItem("date", date);
            }

            let subject = document.forms["myForm"]["subject"].value;
            if (subject == "" || subject.length < 5) {

                const myErrorDiv = document.getElementById("subject");
                const newText = "Subject must be at least 5 characters";
                myErrorDiv.style.color = "red";
                myErrorDiv.style.fontWeight = "bold";
                myErrorDiv.innerHTML = newText;
                
                error = true;
            } else {
                // Store in a variable instead of localStorage
                validSubject = subject;
            }

            if(error){
                return false; 
            }

            let message = document.forms["myForm"]["message"].value;
            if (message  == "" || message.length < 100) {

                const myErrorDiv = document.getElementById("message_label");
                const newText = "Message must be at least 100 characters";
                myErrorDiv.style.color = "red";
                myErrorDiv.style.fontWeight = "bold";
                myErrorDiv.innerHTML = newText;
                
                document.getElementById("message_label").style.font = "red";
                error = true; 
                //return false;
            }else{
                localStorage.setItem("message", message);
            }

            if(error){
                return false; 
            }
        }