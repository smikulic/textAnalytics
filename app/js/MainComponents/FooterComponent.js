import React from "react";

var FooterComponent = React.createClass({
  displayName: 'FooterComponent',

  render () {
    return (
      <div className="footer">
        <div className="fb-like" data-href="https://www.facebook.com/Word-Fluff-512344602288855/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>
        <span className="donate-text">Buy me a coffee!</span>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="donate-button">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="K5TMCPWCLCC46" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" border="0" src="https://www.paypalobjects.com/de_DE/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    );
  }
});

export default FooterComponent;
