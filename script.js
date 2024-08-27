
document.addEventListener('DOMContentLoaded', function() {
    const enrollButtons = document.querySelectorAll('.enroll-button');

    enrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const course = this.getAttribute('data-course');
            const googleFormUrl = "https://forms.gle/JvMJEYWnVA9g9oMs7"
            
            // Add the selected course as a prefilled answer
            const prefilledUrl = `${googleFormUrl}?usp=pp_url&entry.XXXXXX=${encodeURIComponent(course)}`;
            
            // Open the Google Form in a new tab
            window.open(prefilledUrl, '_blank');
        });
    });
});
