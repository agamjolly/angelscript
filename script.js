// This script targets all companies in your search results with a custom note.

// 1. Search Angel List for your location and keywords.
// 2. Paste this script into the console and run it.
// 3. Wait while it works.
// 4. Copy the results from the console for your records.

// You will probably need to run it several times, because it appears to get
// interrupted by Angel List's interspersed 'call to action' buttons in the search
// results. Fortunately, once you apply to a job, it hides from the results.

(function() {

  var placeholderString,
  placeholderWords,
  contactName,
  companyName,
  customNote,
  jobDescription,
  jobUrl,
  jobInfo,
  str = '';

  $('.job_listings')

    .filter(function(_, elem) {
      return ($(elem).attr('data-force-note') );
    })
    .each(function(_, elem) {

      // Find the URL for each job listing.
      $(elem)
          .find('.top a[href]')
          .each( function(idx, value) { str += $(value).attr('href') + "\n"; });

      // Get the placeholder note so we can pluck the names of the contact and company.
      placeholderString = $(elem)
        .find('.interested-note').attr('placeholder');

      // Split placeholder string into words:
      placeholderWords = placeholderString.split(' ');

      // Pluck contact name
      contactName = placeholderWords[4];

      // Pluck company name
      companyName = $(elem).find('.startup-link').text();

      // Build personalized note
      customNote = "Hi " + contactName + "! I'm a full-stack developer and founder of Eli Sleep - a sleep tracking toy built using NodeBots which uses intricate accelerometers and microphones to detect sleeping patterns in children - that analyses how a child sleeps at night and analyses the child's sleep over a cloud, sending the data back to the parents on a cross-platform app built in React Native. My company was recently in talks of being acquired for $130k by a famous VC-backed group based in Chicago. \nIn the past few weeks, I have been working on several personal projects, which include Chrome extenisons made to improve productivity, built using Node.js and Flask. \nI'd love to contribute my skills to " + companyName + ". Let's chat!";

      // .header-info .tagline (text)
      jobDescription = $(elem).find('.tagline').text();

      // .header-info .startup-link (href attr)
      jobUrl = $(elem).find('.startup-link').attr('href');

      // Compile and format job information
      jobInfo = companyName + '\n' + jobDescription + '\n' + str + '\n\n';

      // Get job data for your own records
      console.log(jobInfo);

      // Log out custom note to verify syntax.
      // console.log(customNote + '\n');

      // Add your custom note.
      // *** (Comment these lines out to debug.)
      $(elem)
        .find('.interested-note').text( customNote );

      // Fire in the hole!
      // *** (Comment these lines out to debug.)
      $(elem)
        .find('.interested-with-note-button')
        .each( function(idx, button) { $(button).click(); });

    });

    // Print all of the company and job info to the console.
    return jobInfo;
})();
