load 'deploy'

require 's3-static-site'
require 'mime/types'

bucket = 'www.socialstudios.tv'

puts "================================"
puts "Deploying to bucket: #{bucket}"
puts "================================"
puts "Visit: http://#{bucket}.s3-website-us-east-1.amazonaws.com/"
puts "================================"


set :bucket, bucket
set :access_key_id, ENV['AWS_ACCESS_KEY']
set :secret_access_key, ENV['AWS_SECRET_KEY']

desc "Deploys only the html files, and sets short cache time for them"
task :deploy_html_short_cache do
  _s3 = establish_connection!
  files.each do |file|
    if !File.directory?(file)
      path = base_file_path(file)
      path.gsub!(/^\//, "") # Remove preceding slash for S3
      case File.extname(path)
      when ".html"
        options = {
          :acl => :public_read,
          :cache_control => 'public, max-age=60',
          :content_type => 'text/html;charset=utf-8'
        }
        contents = open(file)
        _s3.buckets[bucket].objects[path].write(contents, options)
      end

    end
  end
end
