/** @jsx React.DOM */

var CancerTypeSelector = React.createClass({displayName: "CancerTypeSelector",
    render: function() {
        var rows = [];
        this.props.repositories.forEach(function(repository) {
            rows.push(React.createElement(RepositoryItem, {repository: repository, key: repository.id}));
        });

        return (
            React.createElement("ul", {className: "repository-list"}, 
                rows
            )
        );
    }
});

React.render(
    React.createElement(CancerTypeSelector, {cancerTypes: cancerTypes.cancerTypes}),
    document.getElementById('react-cancer-type-selector')
);
