# Explain the role of the Domain Name System (DNS) in frontend development.Describe how DNS helps resolve a domain name (e.g., dangote.com) into its corresponding IP address. What happens after the browser gets the IP address?

## ANSWERS
The Domain Name System (DNS) plays a critical but behind-the-scenes role in frontend development. While frontend developers don't directly interact with DNS code, understanding its function helps them appreciate how users access their websites. Understanding DNS helps frontend developers:
Appreciate the user experience - Users don't need to remember cryptic IP addresses.
Troubleshoot issues - If a user reports they can't access the website, DNS problems could be the cause.

We can see DNS as a giant internet phonebook. Websites have user-friendly domain names (like "dangote.com") that are easy to remember. However, computers communicate using numerical IP addresses (like 123.45.67.89). DNS translates these domain names into their corresponding IP addresses, allowing users to access websites without memorizing complex numbers.

# Resolving a Domain Name:

## Here's what happens when a user types "dangote.com" into their browser:
Browser Query: The browser doesn't know the IP address directly. It sends a request to the user's local DNS resolver (often provided by their internet service provider).
Cache Check: The DNS resolver first checks its cache to see if it has recently looked up "dangote.com". If so, it provides the corresponding IP address quickly.
Iterative Search (if no cache): If not cached, the resolver starts a chain of queries to locate the authoritative DNS server that manages "dangote.com". This involves: 
Root Servers: The resolver queries the root servers (think of them as the main directory of the phonebook) to find the appropriate Top-Level Domain (TLD) server for ".com".
TLD Server: The TLD server then directs the resolver to the authoritative nameserver specifically for "dangote.com".
Authoritative Nameserver: Finally, the resolver contacts the authoritative nameserver for "dangote.com" which holds the actual IP address for the website.
Cache & Response: The DNS resolver caches the information for future use and sends the IP address back to the browser.

# After the IP Address:
Once the browser receives the IP address for "dangote.com", it uses that address to establish a connection with the web server hosting the website. This allows the server to send the website's HTML code, images, and other resources to the browser for rendering on the user's screen.




