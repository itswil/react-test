/** @jsx React.DOM */

var CancerTypeSelector = React.createClass({displayName: "CancerTypeSelector",
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

var CancerItem = React.createClass({displayName: "CancerItem",
    render: function() {
        return (
            React.createElement("li", {className: "cancer-item"}, 
                React.createElement("span", {className: "item-name"}, 
                    React.createElement("a", {href: this.props.cancer.slug}, 
                        this.props.cancer.name
                    )
                ), 

                React.createElement("span", {className: "item-owner"}, this.props.repository.owner.login)
            )
        );
    }
});

React.render(
    React.createElement(CancerTypeSelector, {cancerTypes: cancerTypes.cancerTypes}),
    document.getElementById('react-cancer-type-selector')
);
