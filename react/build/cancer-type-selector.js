/** @jsx React.DOM */

var BASE_URL = 'http://preview.macmillan.org.uk/';

// Top-level component
var CancerTypeSelector = React.createClass({displayName: "CancerTypeSelector",
    render: function() {
        return (
            React.createElement("div", {className: "cancer-type-selector"}, 
                React.createElement(CancerTypeSearchBar, null), 
                React.createElement(CancerTypeList, {cancerTypes: this.props.cancerTypes})
            )
        );
    }
});

// Second-level component
var CancerTypeSearchBar = React.createClass({displayName: "CancerTypeSearchBar",
    render: function() {
        return (
            React.createElement("div", {className: "cancer-type-search-bar"}, 
                React.createElement("input", {type: "text"})
            )
        );
    }
});

// Second-level component
var CancerTypeList = React.createClass({displayName: "CancerTypeList",
    render: function() {
        var rows = [];
        this.props.cancerTypes.forEach(function(cancer) {
            rows.push(React.createElement(CancerItem, {cancer: cancer, key: cancer.id}));
        });

        return (
            React.createElement("ul", {className: "cancer-type-list"}, 
                rows
            )
        );
    }
});

// Third-level component
var CancerItem = React.createClass({displayName: "CancerItem",
    render: function() {
        var rows = [];
        this.props.cancer.subtypes.forEach(function(cancer) {
            rows.push(React.createElement(CancerItem, {cancer: cancer, key: cancer.id}));
        });

        return (
            React.createElement("li", {className: "cancer-item"}, 
                React.createElement("span", {className: "item-name"}, 
                    React.createElement("a", {href: BASE_URL + this.props.cancer.slug}, 
                        this.props.cancer.name
                    )
                ), 
                rows.length ?
                    React.createElement("ul", {className: "cancer-subtypes"}, 
                        rows
                    )
                : null
            )
        );
    }
});

React.render(
    React.createElement(CancerTypeSelector, {cancerTypes: cancerTypesObject.cancerTypes}),
    document.getElementById('react-cancer-type-selector')
);
