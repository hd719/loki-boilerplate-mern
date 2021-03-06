import User from '../../schema/user';

export default (req, res) => {
  if (!req.session.user) {
    return res.status(403).send({ message: 'No user present' });
  }
  return User.findOneAndRemove({
    userID: req.params.id
  })
    .then(user => res.status(200).send({ message: 'User destroyed' }))
    .catch(error => res.status(500).send({ error }));
};
