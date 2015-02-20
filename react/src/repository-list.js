/** @jsx React.DOM */

var RepositoryList = React.createClass({
    render: function() {
        var rows = [];
        this.props.repositories.forEach(function(repository) {
            rows.push(<RepositoryItem repository={repository} key={repository.id} />);
        });

        return (
            <ul className="repository-list">
                {rows}
            </ul>
        );
    }
});

var RepositoryItem = React.createClass({
    render: function() {
        return (
            <li className="repository-item">
                <span className="item-name">
                    <a href={this.props.repository.html_url}>
                        {this.props.repository.name}
                    </a>
                </span>

                <span className="item-owner">{this.props.repository.owner.login}</span>
            </li>
        );
    }
});

React.render(
    <RepositoryList repositories={repositories} />,
    document.getElementById('react-repository-list')
);
