const fs = require('fs');
const issuesPath = './resources/issues.json';

const saveData = (data) => {
    try {
        const actualFormat = {
            "issues" : data
        }
        fs.writeFileSync(issuesPath, JSON.stringify(actualFormat))
    } catch (e) {
        console.log(e)
    }
}

const getData = () => {
    try {
        const jsonData = fs.readFileSync(issuesPath)
        return (JSON.parse(jsonData)).issues
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    async createIssue(req, res) {
        try {
            let existingIssues = getData()
            const newIssuesId = Math.floor(100000 + Math.random() * 900000)
            const {title, description} = req.body;
            existingIssues.push({
                id: newIssuesId,
                title: title,
                description: description,
            });

            saveData(existingIssues);
            res.status(201).json({success: true, message: 'Issue added successfully'})
        } catch (e) {
            res.status(500).json({success: false, message: 'server error'})
        }
    },

    async updateIssue(req, res) {
        try {
            const {title, description} = req.body;
            let existingIssues = getData()
            const id = parseInt(req.params.id);
            const issue = existingIssues.find(item => item.id === id);
            existingIssues = existingIssues.filter(item => item.id !== id);
            if (issue && issue.id) {
                issue.title = title;
                issue.description = description;
                existingIssues.push(issue)
                saveData(existingIssues);
            }
            res.status(200).json({success: true, message: 'Issue Updated successfully'})
        }catch (e) {
            res.status(500).json({success: false, message: 'server error'})
        }
    },

    async index(req, res) {
        try {
            const existingIssues = getData()
            res.status(200).json({success: true, data : existingIssues})
        } catch (e) {
            res.status(500).json({success: false, message: 'server error'})
        }
    },

    async deleteIssue(req, res) {
        try {
            let existingIssues = getData()
            existingIssues = existingIssues.filter(item => item.id !== parseInt(req.params.id));

            saveData(existingIssues);
            res.status(200).json({success: true, message : 'issues deleted'});
        }catch (e) {
            res.status(500).json({success: false, message: 'server error'})
        }
    },
};