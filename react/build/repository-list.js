/** @jsx React.DOM */

var RepositoryList = React.createClass({displayName: "RepositoryList",
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

var RepositoryItem = React.createClass({displayName: "RepositoryItem",
    render: function() {
        return (
            React.createElement("li", {className: "repository-item"}, 
                React.createElement("span", {className: "item-name"}, 
                    React.createElement("a", {href: this.props.repository.html_url}, 
                        this.props.repository.name
                    )
                ), 

                React.createElement("span", {className: "item-owner"}, this.props.repository.owner.login)
            )
        );
    }
});

React.render(
    React.createElement(RepositoryList, {repositories: repositories}),
    document.getElementById('react-repository-list')
);
