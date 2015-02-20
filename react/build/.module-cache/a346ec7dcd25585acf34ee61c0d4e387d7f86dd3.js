/** @jsx React.DOM */

var BASE_URL = 'http://preview.macmillan.org.uk/';

// Top-level component
var CancerTypeSelector = React.createClass({displayName: "CancerTypeSelector",
    render: function() {
        var rows = [];
        this.props.cancerTypes.forEach(function(cancer) {
            rows.push(React.createElement(CancerItem, {cancer: cancer, key: cancer.id}));
        });

        return (
            React.createElement("div", {className: "cancer-type-selector"}, 
                React.createElement(CancerTypeSearchBar, null), 
                React.createElement("ul", {className: "cancer-type-list"}, 
                    rows
                )
            )
        );
    }
});

// Second-level component
var CancerTypeSearchBar = React.createClass({displayName: "CancerTypeSearchBar",
    render: function() {
        return (
            React.createElement("input", {type: "text"})
        );
    }
});

var CancerItem = React.createClass({displayName: "CancerItem",
    render: function() {
        return (
            React.createElement("li", {className: "cancer-item"}, 
                React.createElement("span", {className: "item-name"}, 
                    React.createElement("a", {href: BASE_URL + this.props.cancer.slug}, 
                        this.props.cancer.name
                    )
                )
            )
        );
    }
});

React.render(
    React.createElement(CancerTypeSelector, {cancerTypes: cancerTypes.cancerTypes}),
    document.getElementById('react-cancer-type-selector')
);
