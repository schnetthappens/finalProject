import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['current-user-container'],

  didInsertElement: function(){
    //Dropdown plugin data
    var ddData = [
        {
            text: "Girl Develop It",
            value: 0,
            selected: false,
            description: "Girl Develop It is a nonprofit organization that exists to provide affordable and judgment-free opportunities for women interested in learning web and software development.",
            imageSrc: "../assets/images/gdi_logo.png"
        },
        {
            text: "100 Girls of Code",
            value: 1,
            selected: false,
            description: "The mission of 100 Girls of Code is to achieve gender parity in STEM fields by introducing more young women to code and computer engineering at a young age.",
            imageSrc: "../assets/images/girlsofcode.png"
        },
        {
            text: "Girls Who Code",
            value: 2,
            selected: false,
            description: "Girls Who Code programs work to inspire, educate, and equip girls with the computing skills to pursue 21st century opportunities.",
            imageSrc: "../assets/images/girlswhocode.png"
        },
        {
            text: "Code.org",
            value: 3,
            selected: false,
            description: "Code.org® is a non-profit dedicated to expanding participation in computer science by making it available in more schools, and increasing participation by women and underrepresented students of color.",
            imageSrc: "../assets/images/codeorg.png"
        }
    ];

    $('.select-organization-list').ddslick({
      data: ddData,
      width: 500,
      imagePosition: 'left',
      selectText: 'Choose an organization',
      onSelected: function(data) {
        console.log(data);
      }
    });
  },

  actions: {
    saveOrg: function() {
      this.sendAction('action');
    }
  }
});
