<div class="starfield" style="width:100%;height:100%"></div>
 
<header>
  <?php if ($page['header']): ?>
      <?php print render($page['header']); ?>
  <?php endif; ?>

  <?php if (!empty($primary_nav)): ?>
    <?php print render($primary_nav) ?>
  <?php endif ?>
</header>


<?php if ($site_name || $site_slogan): ?>
  <div id="name-and-slogan"<?php if ($hide_site_name && $hide_site_slogan) { print ' class="element-invisible"'; } ?>>

    <?php if ($site_name): ?>
      <?php if ($title): ?>
        <div id="site-name"<?php if ($hide_site_name) { print ' class="element-invisible"'; } ?>>
          <?php print $site_name; ?>
        </div>
      <?php endif; ?>
    <?php endif; ?>

    <?php if ($site_slogan): ?>
      <div id="site-slogan"<?php if ($hide_site_slogan) { print ' class="element-invisible"'; } ?>>
        <?php print $site_slogan; ?>
      </div>
    <?php endif; ?>

  </div>
<?php endif; ?>
 
<div class="container">
  <?php if ($page['main']): ?>
      <?php print render($page['main']); ?>
  <?php endif; ?>
</div>

<?php if ($messages): ?>
  <div id="messages"><div class="section clearfix">
    <?php print $messages; ?>
  </div></div> <!-- /.section, /#messages -->
<?php endif; ?>
