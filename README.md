# team5587.github.io

This is the public website for FRC Team 5587, Titan Robotics. The website is hosted at [frc5587.org](https://frc5587.org/), and makes use of Jekyll to reuse elements wherever possible

## Getting Started

### Install Dependencies

* Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/) through instructions on their site for your specific operating system. You can check for an installation of Ruby by running
    ```Shell
    $ ruby -v
    ```
    However, the installation listed is not necessarily the most up-to-date version of ruby your system will use. Research information about Ruby for your operating system if your Ruby version is severely out of date.

* Install [RubyGems](https://rubygems.org/pages/download) through download links on their website. If RubyGems is already installed, run

    ```Shell
    $ gem update --system    # may need to be administrator/root
    ```

    Or for older versions of RubyGems

    ```Shell
    $ gem install rubygems-update  # again, might need to be admin/root
    $ update_rubygems              # ... here too
    ```

* Install [Jekyll](https://jekyllrb.com/) and [Bundler](https://bundler.io/)
    ```Shell
    $ gem install bundler jekyll
    ```

### Build Site Locally

1. Clone repository and enter it
    ```Shell
    $ git clone https://github.com/Team5587/team5587.github.io.git
    $ cd team5587.github.io
    ```
2. Install all build dependencies through Bundler
    ```Shell
    $ bundle install
    ```
3. Have Jekyll build the site for viewing on localhost
    ```Shell
    $ bundle exec jekyll serve
    ```
4. Open the link next to `Server address` in the output of the previous command in your favorite web browser to view the website with any changes you make locally

## License

This project is licensed under the MIT license - see  [LICENSE](LICENSE) for more information