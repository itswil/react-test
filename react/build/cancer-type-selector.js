/** @jsx React.DOM */

var BASE_URL = 'http://preview.macmillan.org.uk/';

// Top-level component
var CancerTypeSelector = React.createClass({displayName: "CancerTypeSelector",
    getInitialState: function(){
        return {
            filterText: ''
        }
    },
    handleUserInput: function(filterText) {
        this.setState({
            filterText: filterText
        });
    },
    render: function() {
        return (
            React.createElement("div", {className: "cancer-type-selector"}, 
                React.createElement(CancerTypeSearchBar, {filterText: this.state.filterText, onUserInput: this.handleUserInput}), 
                React.createElement(CancerTypeList, {cancerTypes: this.props.cancerTypes, filterText: this.state.filterText})
            )
        );
    }
});

// Second-level component
var CancerTypeSearchBar = React.createClass({displayName: "CancerTypeSearchBar",
    handleChange: function() {
        this.props.onUserInput(
            this.refs.cancerTypeSearchBar.getDOMNode().value
        );
    },
    render: function() {
        return (
            React.createElement("div", {className: "cancer-type-search-bar"}, 
                React.createElement("input", {type: "text", placeholder: "Search for a cancer type", 
                    value: this.props.filterText, 
                    onChange: this.handleChange, 
                    ref: "cancerTypeSearchBar"}
                )
            )
        );
    }
});

// Second-level component
var CancerTypeList = React.createClass({displayName: "CancerTypeList",
    render: function() {
        var rows = [];
        var filterText = this.props.filterText;

        this.props.cancerTypes.forEach(function(cancer) {
            if (cancer.name.indexOf(filterText) != -1) {
                rows.push(React.createElement(CancerItem, {cancer: cancer, key: cancer.id}));
            }

            cancer.subtypes.forEach(function(subtype) {
                if (cancer.name.indexOf(filterText) != -1) {
                    rows.push(React.createElement(CancerItem, {cancer: subtype, key: subtype.id}));
                }
            });
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
    React.createElement(CancerTypeSelector, {cancerTypes: cancerTypesObject.cancerTypes}),
    document.getElementById('react-cancer-type-selector')
);
