import os
import git


class InvalidLocalRepoError(Exception):
    pass


class CannotPullFromRepoError(Exception):
    pass


class GitManager(object):

    def __init__(self, url, dst_path):
        self.url = url
        self.dst_path = dst_path
        self.repo = self.clone_or_get_local_copy()
        self.remote = self.repo.remote()

    def clone_or_get_local_copy(self):
        if self.local_copy_exists:
            return self.get_local_copy()
        else:
            return self.clone()

    def clone(self):
        if not os.path.exists(self.dst_path):
            os.mkdir(self.dst_path)
        return git.Repo.clone_from(self.url, self.dst_path)

    def get_local_copy(self):
        if self.is_valid_local_copy:
            return git.Repo(self.dst_path)
        else:
            raise InvalidLocalRepoError()

    def pull(self):
        if not self.is_ok_to_pull:
            raise CannotPullFromRepoError()
        if self.is_behind:
            self.remote.pull()

    @property
    def is_ok_to_pull(self):
        if self.is_ahead or self.repo.is_dirty or not self.in_master_branch:
            return False
        return True

    @property
    def in_master_branch(self):
        return self.repo.active_branch == 'master'

    @property
    def local_copy_exists(self):
        return os.path.exists(self.dst_path)

    @property
    def is_valid_local_copy(self):
        try:
            repo = git.Repo(self.dst_path)
        except git.exc.InvalidGitRepositoryError:
            return False

        return self.url == repo.remote().url

    def count_commits(self, selection):
        self.remote.fetch()
        return len([c for c in self.repo.iter_commits(selection)])

    @property
    def is_ahead(self):
        return self.count_commits('origin/master..master')

    @property
    def is_behind(self):
        return self.count_commits('master..origin/master')
