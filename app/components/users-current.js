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
            imageSrc: "../assets/images/gdi_logo.png"
        },
        {
            text: "100 Girls of Code",
            value: 1,
            selected: false,
            imageSrc: "../assets/images/girlsofcode.png"
        },
        {
            text: "Girls Who Code",
            value: 2,
            selected: false,
            imageSrc: "../assets/images/girlswhocode.png"
        },
        {
            text: "Code.org",
            value: 3,
            selected: false,
            imageSrc: "../assets/images/codeorg.png"
        }
    ];

    $('.select-organization-list').ddslick({
      data: ddData,
      width: 500,
      imagePosition: 'left',
      selectText: 'Choose an organization',
      onSelected: function(selectedData) {
        this.set('selectedName', selectedData.selectedData.text);
      }.bind(this)
    });
  },

  actions: {
    saveOrg: function() {
      this.sendAction('action', this.get('selectedName'));
      //console.log(this.get('selectedData'));
    }
  }
});
